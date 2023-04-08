import { Header } from "./components/Header"

import styles from './App.module.css'
import { Post, PostType } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/rafaelslopes1.png',
      name: 'Rafael Lopes',
      role: 'Backend Developer @Scora'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'paragraph',
        content: '👉 jane.design/doctorcare'
      },
      {
        type: 'link',
        content: '#novoprojeto #nlw #rocketseat'
      }
    ],
    publishedAt: new Date('2023-03-25 21:10:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'paragraph',
        content: '👉 jane.design/doctorcare'
      },
      {
        type: 'link',
        content: '#novoprojeto #nlw #rocketseat'
      }
    ],
    publishedAt: new Date('2023-03-31 15:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}