import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

type Props = {
    end: number;
    duration: number;
    className?: string;
};

const AnimatedCounter = ({ end, duration, className }: Props) => {
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 } // Déclenche quand 50% de l'élément est visible
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    return (
        <div className={className} ref={counterRef}>
            {isVisible ? (
                <CountUp start={0} end={end} duration={duration} />
            ) : (
                <span>0</span>
            )}
        </div>
    );
};

export default AnimatedCounter;
