import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from './Comment'
import { Avatar } from './Avatar'

import styles from './Post.module.css'
import { useState } from 'react'

export function Post({author, publishedAt, content}) {
    const [comments, setComments] = useState([
        'Post muito legal']);
    const [newCommentText, setNewCommentText] = useState ('');

    const dateFormatted = format(publishedAt, "MMM d, y");
    const dateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateComment() {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('')
    }

    function handleNewCommentChange(){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(){
        
        event.target.setCustomValidity('Este campo é obrigatório!');
    }

    function deleteComment(commentToDelete) {
       const commentsWithoutDeletedOne = comments.filter(comment => {
        return comment !== commentToDelete;
       })

       setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length == 0

    return(
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <Avatar src={author.avatarUrl}/>
                        <div className={styles.authorInfo}>
                            <strong>{author.name}</strong>
                            <span>{author.role}</span>
                        </div>
                    </div>

                    <time title={dateFormatted} dateTime={publishedAt.toISOString()}>
                        {dateRelativeToNow}
                    </time>
                </header>

                <div className={styles.content}>
                    {content.map(line => {
                        if(line.type === "paragraph"){
                            return <p key={line.content}>{line.content}</p>
                        } else if (line.type === "link"){
                            return <p key={line.content} ><a href={line.link}>{line.content}</a></p>
                        } else{
                            return <span key={line.content}>{line.content}</span>
                        }
                    })}
                </div>

                <form onSubmit={handleCreateComment} className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    <textarea 
                        name='comment'
                        value={newCommentText}
                        placeholder='Deixe um comentario' 
                        onChange={handleNewCommentChange}
                        onInvalid={handleNewCommentInvalid}
                        required/>
                    <footer>
                        <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                    {comments.map(comment => {
                        return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
                    })}
                </div>
            </article>
        </>       
    )        
}