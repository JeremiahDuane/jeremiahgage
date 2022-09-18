import styles from './Article.module.scss'

function Article(props) {
    return (
        <div className={styles.article}>
            <h1>{props.title}</h1>
            <p> {props.body} </p>
        </div>
    );
}


export default Article;
