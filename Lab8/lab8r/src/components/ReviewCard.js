import React from 'react'

export default function ReviewCard() {
  return (
    <div style={{height: 150, width: '80%', backgroundColor: 'lightgrey', borderRadius: 5, padding: 20, marginTop: 20, borderWidth: 2, borderColor: 'black'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div style={{margin: 10}}>
            Name: 
            <input style={{borderRadius: 5, height: 20}} type="text" name="name" />
        </div>
        <div style={{margin: 10}}>
            Score 
            <input style={{borderRadius: 5, height: 20}} type="text" name="name" />
        </div>
        <div style={{margin: 10}}>
            Date 
            <input style={{borderRadius: 5, height: 20}} type="text" name="name" />
        </div>
        
        </div>
        Reiew:
        <input style={{height: 40, width: '80%', marginLeft: 10, borderRadius: 10, marginBottom: 10}} type="text" name="review" />
        
        <button style={{height: 40, width: '80%', marginLeft: 60, backgroundColor: 'red', color: 'white', borderRadius: 10}}>Submit</button>
    </div>
  )
}
