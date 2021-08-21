import { useStore } from '../components/state'
import { useRef } from 'react';
import Post from './post';

export default function Home() {

  const node1 = useRef()
  const node2 = useRef()
  const node3 = useRef()

  
  const show = useStore(state => state.show)
  const call = useStore(state => state.call)
  const errorText = useStore(state => state.errorText)
  

  const setId = useStore(state => state.setId)
  const setName = useStore(state => state.setName)
  const setPrice = useStore(state => state.setPrice)
  const setShow = useStore(state => state.setShow)
  const setCall = useStore(state => state.setCall)
  const setErrorText = useStore(state => state.setErrorText)

  const handleClick =  () => {
    setShow('none')
    setErrorText('')

    setId(node1.current.value)
    setName(node2.current.value)
    setPrice(node3.current.value)

    setCall(true)
  }

  function ErrorCall(){
    return <div style={{color:'red', marginTop:20}}>{errorText}</div>
  }



  return (

    <div style={{ width: 300, margin: '0 auto', backgroundColor: '#fafafa', textAlign: 'center', padding: 10 }} >
      <h3>Create Villa</h3>
      {/* <span style={{color:'red'}} >{erorText}</span> */}
      <input ref={node1} type='number' size='6' style={{ fontSize: 17, lineHeight: 1.4 }} placeholder='Villa Id' />
      <br></br>
      <br></br>
      <input ref={node2} type='text' size='6' style={{ fontSize: 17, lineHeight: 1.4 }} placeholder='Villa Name' />
      <br></br>
      <br></br>
      <input ref={node3} type='number' size='6' style={{ fontSize: 17, lineHeight: 1.4 }} placeholder='Price' />
      <br></br>
      <br></br>

      <button style={{ marginLeft: 90, fontSize: 20, lineHeight: 1.4, backgroundColor: '#fff', padding: '5px 20px', display: show }} onClick={handleClick} >Create</button>
      {
        call ? <Post/> : <ErrorCall/>
      }
    </div>

  )
}