import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/julia.png',
      name: 'Julia',
      role: 'Front End developer'
    },
    content: [
      { type: 'paragraph', content: 'Welcome to my own world!'},
      { type: 'paragraph', content: 'Acabei de subir um novo projeto! Passem lá pra me dar uma força.'},
      { type: 'span', content: 'Espero que gostem:'},
      { type: 'link', content: ' acessar', link: 'https://github.com/JLeiite/fenixcargo'}
    ],
    publishedAt: new Date('2023-12-09 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/dev.png',
      name: 'João dos Cocos',
      role: 'Tech Lead'
    },
    content: [
      { type: 'paragraph', content: 'Faala galera!'},
      { type: 'paragraph', content: 'Deem uma olhada nesse perfil que massa!'},
      { type: 'link', content: 'github.com/jleiite', link: 'https://github.com/JLeiite'}
    ],
    publishedAt: new Date('2023-12-07 18:30:00')
  }
];

export function App() {

  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />)
          })}
        </main>
      </div>
    </>
  )
}