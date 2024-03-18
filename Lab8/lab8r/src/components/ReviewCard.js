import React from 'react'

export default function ReviewCard() {
  return (
    <div style={{height: 'auto', width: 'auto', backgroundColor: 'lightgrey', borderRadius: 5, padding: 20, marginTop: 20, alignContent: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div style={{margin: 10}}>
            Name: 
            <input style={{borderRadius: 5, height: 20, marginLeft: 15}} type="text" name="name" />
        </div>
        <div style={{margin: 10}}>
            Score 
            <input style={{borderRadius: 5, height: 20, marginLeft: 15}} type="text" name="name" /> /10
        </div>
        <div style={{margin: 10}}>
            Date 
            <input style={{borderRadius: 5, height: 20, marginLeft: 15}} type="text" name="name" />
        </div>
        
        </div>
        <h4>Review:</h4>
        <input style={{height: 60, width: '80%', marginLeft: 50, borderRadius: 10, marginBottom: 10}} type="text" name="review" />
        
        <button style={{height: 40, width: '80%', marginLeft: 60, backgroundColor: 'red', color: 'white', borderRadius: 10, fontSize: 15, fontWeight: 'bold'}}>Submit</button>
    </div>
  )
}
