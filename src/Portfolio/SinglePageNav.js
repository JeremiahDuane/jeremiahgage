import styles from './SinglePageNav.module.scss'

function SinglePageNav(props) {
    window.addEventListener("scroll", navHighlighter);
    return (
        <>
            <div className={styles.sideBar}>
                <nav className={`${styles.navigation} navigation`}>
                    <ul>
                        <li>
                            {props.children.map((item, index)=>{
                                return <a key={index} href={`#${item.props.header}`}>{item.props.header}</a>
                            })}
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.mainContent}>
            {props.children.map((item, index)=>{
                return <section key={index} id={item.props.header}>
                    {item}                    
                </section>
            })}
            </div>
        </>
    );
}

function navHighlighter() {
    const sections = document.querySelectorAll("section[id]");
    let scrollY = window.pageYOffset;
  
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
    
        const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
        var sectionId = current.getAttribute("id");
        
        var el = document.querySelector(".navigation a[href*=" + sectionId + "]")
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ){
            el.className = styles.active
        } else {
            el.className = ""
        }
    });
}


export default SinglePageNav;
