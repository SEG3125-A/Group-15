import React from 'react'

export default function Review() {
  return (
    <div style={{height: 220, width: 900, backgroundColor: 'lightgrey', borderRadius: 5, padding: 20, margin: 20, borderWidth: 2, borderColor: 'black'}}>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
    <div style={{margin: 10}}>
         
        <h4>Name: Name Placeholder</h4> 
    </div>
    <div style={{margin: 10}}>
    <h4>Score: Score Placeholder</h4> 
    </div>
    <div style={{margin: 10}}>
    <h4>Date: Date Placeholder</h4> 
    </div>
    
    </div>
    <h4 style={{marginBottom: 50}}>Review: Review Placeholder</h4> 
    
    <button style={{height: 40, width: 60, marginLeft: 20, backgroundColor: 'red', color: 'white', borderRadius: 10, fontSize: 15, fontWeight: 'bold'}}>Like</button>
    <button style={{height: 40, width: 60, marginLeft: 60, backgroundColor: 'red', color: 'white', borderRadius: 10, fontSize: 15, fontWeight: 'bold'}}>Dislike</button>
</div>
  )
}
