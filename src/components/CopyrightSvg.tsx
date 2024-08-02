export interface CopyrightSvgProps extends React.SVGProps<SVGSVGElement> { }

export default function CopyrightSvg({ className, ...props }: CopyrightSvgProps) {
    return (
        <svg width="140" height="140" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
            <rect x="30" y="10" width="10" height="10" />
            <rect width="10" height="10" transform="matrix(1 0 0 -1 30 130)" />
            <rect width="10" height="10" transform="matrix(-1 0 0 1 110 10)" />
            <rect x="110" y="130" width="10" height="10" transform="rotate(-180 110 130)" />
            <rect x="20" y="20" width="10" height="10" />
            <rect width="10" height="10" transform="matrix(1 0 0 -1 20 120)" />
            <rect width="10" height="10" transform="matrix(-1 0 0 1 120 20)" />
            <rect x="120" y="120" width="10" height="10" transform="rotate(-180 120 120)" />
            <rect x="10" y="30" width="10" height="10" />
            <rect width="10" height="10" transform="matrix(1 0 0 -1 10 110)" />
            <rect width="10" height="10" transform="matrix(-1 0 0 1 130 30)" />
            <rect x="130" y="110" width="10" height="10" transform="rotate(-180 130 110)" />
            <rect y="50" width="10" height="10" />
            <rect x="50" y="70" width="10" height="10" />
            <rect x="50" y="50" width="10" height="10" />
            <rect x="60" y="50" width="10" height="10" transform="rotate(-90 60 50)" />
            <rect x="60" y="100" width="10" height="10" transform="rotate(-90 60 100)" />
            <rect width="10" height="10" transform="matrix(-1 0 0 1 140 50)" />
            <rect x="50" y="10" width="10" height="10" transform="rotate(-90 50 10)" />
            <rect width="10" height="10" transform="matrix(-4.37114e-08 1 1 4.37114e-08 50 130)" />
            <rect y="70" width="10" height="10" />
            <rect width="10" height="10" transform="matrix(-1 0 0 1 140 70)" />
            <rect x="70" y="10" width="10" height="10" transform="rotate(-90 70 10)" />
            <rect width="10" height="10" transform="matrix(-4.37114e-08 1 1 4.37114e-08 70 130)" />
            <rect x="10" y="40" width="10" height="10" />
            <rect width="10" height="10" transform="matrix(1 0 0 -1 10 100)" />
            <rect width="10" height="10" transform="matrix(-1 0 0 1 130 40)" />
            <rect x="130" y="100" width="10" height="10" transform="rotate(-180 130 100)" />
            <rect y="60" width="10" height="10" />
            <rect x="50" y="80" width="10" height="10" />
            <rect x="50" y="60" width="10" height="10" />
            <rect x="70" y="50" width="10" height="10" transform="rotate(-90 70 50)" />
            <rect x="80" y="50" width="10" height="10" transform="rotate(-90 80 50)" />
            <rect x="80" y="100" width="10" height="10" transform="rotate(-90 80 100)" />
            <rect x="70" y="100" width="10" height="10" transform="rotate(-90 70 100)" />
            <rect width="10" height="10" transform="matrix(-1 0 0 1 140 60)" />
            <rect x="60" y="10" width="10" height="10" transform="rotate(-90 60 10)" />
            <rect width="10" height="10" transform="matrix(-4.37114e-08 1 1 4.37114e-08 60 130)" />
            <rect y="80" width="10" height="10" />
            <rect width="10" height="10" transform="matrix(-1 0 0 1 140 80)" />
            <rect x="80" y="10" width="10" height="10" transform="rotate(-90 80 10)" />
            <rect width="10" height="10" transform="matrix(-4.37114e-08 1 1 4.37114e-08 80 130)" />
            <rect x="40" y="10" width="10" height="10" />
            <rect width="10" height="10" transform="matrix(1 0 0 -1 40 130)" />
            <rect width="10" height="10" transform="matrix(-1 0 0 1 100 10)" />
            <rect x="100" y="130" width="10" height="10" transform="rotate(-180 100 130)" />
        </svg>
    );
}
