import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }

    return(
        <>
            <div className={styles.comment}>
                <Avatar hasBorder={false} src="https://github.com/ko.png" />
            
                <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.commentAuthor}>
                                <strong>JK</strong>
                                <time title='Dec 11, 2023' dateTime='2023-12-11 12:30:00'>Há 30min</time>
                            </div>
                            <button onClick={handleDeleteComment} title='Deletar comentário'>
                                <Trash size={24}/>
                            </button>
                        </header>

                        <p>{content}</p>
                    </div>
                

                    <footer>
                        <button onClick={handleLikeComment}>
                            <ThumbsUp/>
                            Aplaudir <span>{likeCount}</span>
                        </button>
                    </footer>
                </div>
            </div>
        </>
    )
}