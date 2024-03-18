import React from 'react'

export default function ReviewCard() {
  return (
    <div style={{height: 'auto', width: '80%', backgroundColor: 'grey', borderRadius: 5, padding: 10, marginTop: 20}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div style={{margin: 10}}>
            Name: 
            <input style={{borderRadius: 5}} type="text" name="name" />
        </div>
        <div style={{margin: 10}}>
            Score 
            <input style={{borderRadius: 5}} type="text" name="name" />
        </div>
        <div style={{margin: 10}}>
            Date 
            <input style={{borderRadius: 5}} type="text" name="name" />
        </div>
        
        </div>
        Reiew:
        <input style={{height: 40, width: '80%', marginLeft: 10, borderRadius: 10}} type="text" name="review" />
        
    </div>
  )
}
