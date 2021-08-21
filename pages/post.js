import { useEffect } from "react";
import { useStore } from '../components/state'
import Router from 'next/router';

export default function Post() {

  const id = useStore(state => state.id)
  const name = useStore(state => state.name)
  const price = useStore(state => state.price)
  const setShow = useStore(state => state.setShow)
  const setCall = useStore(state => state.setCall)
  const setErrorText = useStore(state => state.setErrorText)


  useEffect(
    async () => {
      setCall(false)
      try {
        const res = await fetch('/api/create_villa', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: id, name: name, price: price }),
        });

        if (res.status === 500) {

          setErrorText(JSON.stringify(await res.text()))
        }

        if (res.status === 200) {
          Router.push('/');
          setShow('block')
          console.log('status 200')

        } else {
          throw new Error(await res.text());
        }

      } catch (error) {
        setShow('block')
      }
    }, []
  )
  return <span></span>
}
