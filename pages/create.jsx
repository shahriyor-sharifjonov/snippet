import React, {useState, useeffect} from 'react'
import axios from 'axios'
import Link from 'next/link'

const Create = () => {
  const [language, setLanguage] = useState('')
  const [code, setCode] = useState('')

  const handleSubmit = async () => {
    const {data} = await axios.post('/api/posts', {
      language,
      code
    })
    console.log(data);
  }
  return (
    <>
      <div className='breadcrumb'>
        <Link href="/" legacyBehavior>
          <a className='breadcrumb__link'>Home</a>
        </Link>
        <Link href="#" legacyBehavior>
          <a className='breadcrumb__link inactive'>Create</a>
        </Link>
      </div>
      <div className='form'>
        <h1 className="form__title">Create Snippet</h1>
        <input type="text" value={language} onInput={(e) => {setLanguage(e.target.value)}} placeholder='language' className='form__input'/>
        <textarea type="text" value={code} onInput={(e) => {setCode(e.target.value)}} placeholder={`// this is a title\n\nconst text = \'hello world\'\nconsole.log(text)`} className='form__input' />
        <button onClick={handleSubmit} className='form__btn'>post</button>
      </div>
    </>
  )
}

export default Create