import React from 'react'
import "./NewPost.css"

const NewPost = () => {
  return (
    <div className='new-post'>
        <h2>Inserir novo post:</h2>
        <form>
        <div className="form-control">
            <label htmlFor="title">Título</label>
            <input type="text" name="title" id="title" placeholder='Digite o título' />
        </div>
        <div className="form-control">
            <label htmlFor="body">Contéudo</label>
            <textarea type="text" name="title" id="title" placeholder='Digite o contéudo' ></textarea>
        </div>
        <input type="submit" value="Criar Post" className='btn' />
        </form>
    </div>
  )
}

export default NewPost