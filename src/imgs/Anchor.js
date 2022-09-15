function Anchor(props) {
    const color = props.color
    const strokeWidth = 25

    return (
        <>
            <div className="App">
                <svg id="eqh7Rk2jaXg1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-100 -100 500 500" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                    <circle cx="150" cy="150" r="200" stroke="white" strokeWidth={strokeWidth} fill="#00E7FF" />
                    <path fill="none" stroke={color} strokeWidth={strokeWidth} d="M42.5698,162.389343c-5.945131,1.668956-19.817104,5.563185-19.817104,5.563185c10.864908,82.045864,61.314534,90.574905,95.027171,62.997613C138.652829,213.875838,147.571023,176.888069,150,150l-.000001-139.181562" transform="matrix(-1 0 0 1 300 39.600707)"/>
                    <path fill="none" stroke={color} strokeWidth={strokeWidth} d="M42.5698,162.389343c-5.945131,1.668956-19.817104,5.563185-19.817104,5.563185c10.864908,82.045864,61.314534,90.574905,95.027171,62.997613C138.652829,213.875838,147.571023,176.888069,150,150l-.000001-139.181562" transform="translate(.005784 39.600707)"/>
                    <path fill="none" stroke={color} strokeWidth={strokeWidth} d="M100.376294,127.20038c48.324711-20.845953,82.535557-5.492715,99.717779,0" transform="matrix(1.795425 0 0 1.191964-119.965407-68.072125)"/>
                    <ellipse fill="none" stroke={color} strokeWidth={strokeWidth} rx="17.5" ry="17.5" transform="translate(150 32.919145)"/>
                </svg>
            </div>
        </>
    );
}
 
export default Anchor;
