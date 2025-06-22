import React, { useEffect, useState, useRef } from "react";
import * as Babel from '@babel/standalone';
import ReactECharts from 'echarts-for-react';
import { aiService } from "../../service/aiService";
import { FaPlay, FaPause, FaRedo, FaExclamationTriangle } from 'react-icons/fa';

interface JsxRendererProps {
    jsxString: string;
}

const JsxRenderer: React.FC<JsxRendererProps> = ({ jsxString }) => {
    const [Component, setComponent] = useState<React.ReactElement | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!jsxString) return;

        try {
            const wrappedJsx = `<>${jsxString}</>`;
            const transformedCode = Babel.transform(wrappedJsx, {
                presets: ['react']
            }).code;

            if (!transformedCode) {
                throw new Error("Babel transformation resulted in empty code.");
            }
            
            const factory = new Function('React', 'ReactECharts', `return ${transformedCode}`);
            const componentElement = factory(React, ReactECharts);
            
            setComponent(componentElement);
            setError(null);
        } catch (e) {
            console.error("Error rendering JSX string:", e);
            setError("No se pudo cargar la vista previa del dashboard.");
            setComponent(null);
        }
    }, [jsxString]);

    if (error) {
        return <div className="text-red-500 text-center p-4">{error}</div>;
    }

    return Component ? <>{Component}</> : <div className="text-center p-4">Generando vista...</div>;
};

const ResultadoSimulador = () => {
    const [dashboardJsx, setDashboardJsx] = useState<string>("");
    const [isLoadingDashboard, setIsLoadingDashboard] = useState<boolean>(true);
    const [dashboardError, setDashboardError] = useState<string | null>(null);
    
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [isAudioLoading, setIsAudioLoading] = useState<boolean>(false);
    const [audioError, setAudioError] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    // Effect 1: Fetch Dashboard
    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                setIsLoadingDashboard(true);
                setDashboardError(null);
                const dashboardResponse = await aiService.createDashboard();
                setDashboardJsx(dashboardResponse);
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : "Error desconocido al cargar el dashboard";
                setDashboardError(errorMessage);
                console.error(err);
            } finally {
                setIsLoadingDashboard(false);
            }
        };

        fetchDashboard();
        
        return () => {
             if (audioRef.current && audioRef.current.src) {
                URL.revokeObjectURL(audioRef.current.src);
            }
        };
    }, []);

    // Effect 2: Fetch Audio after dashboard is ready
    useEffect(() => {
        if (!dashboardJsx || dashboardError) {
            return;
        }

        const fetchAudio = async () => {
            setIsAudioLoading(true);
            setAudioError(null);
            try {
                const audioBlob = await aiService.getAudioSummary();
                const url = URL.createObjectURL(audioBlob);
                setAudioUrl(url);
            } catch (err) {
                console.error(err);
                setAudioError("No se pudo cargar el audio.");
            } finally {
                setIsAudioLoading(false);
            }
        };

        fetchAudio();
    }, [dashboardJsx, dashboardError]);
    
    const handlePlayPause = () => {
        if (!audioUrl) return;

        if (!audioRef.current) {
            const audio = new Audio(audioUrl);
            audio.addEventListener('play', () => setIsPlaying(true));
            audio.addEventListener('pause', () => setIsPlaying(false));
            audio.addEventListener('ended', () => setIsPlaying(false));
            audioRef.current = audio;
        }
        
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
    };

    const handleReplay = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    if (isLoadingDashboard) {
        return <div className="flex justify-center items-center h-screen">Cargando resultados de la simulación...</div>;
    }

    if (dashboardError) {
        return <div className="flex justify-center items-center h-screen text-red-500">{dashboardError}</div>;
    }

    const isAudioReady = !!audioUrl && !audioError;

    return (
        <div>
            <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-4 flex items-center justify-between">
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold">Resumen del Análisis</h2>
                    {audioError && (
                        <div className="flex items-center gap-2 text-sm text-yellow-400 mt-1">
                            <FaExclamationTriangle />
                            <span>{audioError}</span>
                        </div>
                    )}
                </div>
                <div className="flex items-center gap-4">
                    <button 
                        onClick={handlePlayPause} 
                        className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed"
                        disabled={!isAudioReady || isAudioLoading}
                        title={isAudioReady ? "Reproducir/Pausar" : "Audio no disponible"}
                    >
                        {isAudioLoading ? (
                           <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                        ) : isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
                    </button>
                    <button 
                        onClick={handleReplay} 
                        className="p-2 rounded-full bg-gray-600 hover:bg-gray-700 disabled:bg-gray-500 disabled:cursor-not-allowed"
                        disabled={!isAudioReady || isAudioLoading}
                        title={isAudioReady ? "Repetir" : "Audio no disponible"}
                    >
                        <FaRedo size={20} />
                    </button>
                </div>
            </div>
            
            <JsxRenderer jsxString={dashboardJsx} />
        </div>
    );
};

export default ResultadoSimulador;
