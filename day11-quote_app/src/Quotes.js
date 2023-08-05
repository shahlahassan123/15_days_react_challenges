import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setQuotes } from './features/quoteSlice'
import SelectedText from './SelectedText'




const fetchQuotes = (dispatch) => {
    axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes').then(data=>{
        dispatch(setQuotes(data.data.messages.non_personalized))
        
})
}




const Quotes = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        fetchQuotes(dispatch)
    },[dispatch])

    const quotes = useSelector((state) => state.quotes)


   let startingQuote = quotes[0]
    const [Text, setText] = useState("")

    const [selectedWords, setSelectedWords] = useState([]);
  
//HANDLING WORD SELECTION
    const handleClick = () => {
        const selection = window.getSelection();
        const selectedText = selection.toString();
        const selectedWord = selectedText.match(/\w+/)[0]
        setSelectedWords((prev) => [...prev, selectedWord])
        const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setText(newQuote)
    }

    
    return (
      <div>
        <p onClick={handleClick}>{Text ? Text : startingQuote}</p>
        <SelectedText words={selectedWords}/>
      </div>
    )
  }
  
  export default Quotes