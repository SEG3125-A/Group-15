import React from 'react'

export default function Review({name, media, date, review}) {
    //change color of like and dislike button
  return (
    <div style={{height: 220, width: 900, backgroundColor: 'lightgrey', borderRadius: 5, padding: 20, margin: 20, borderWidth: 2, borderColor: 'black'}}>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
    <div style={{margin: 10}}>
         
        <h4>Name: {name}</h4> 
    </div>
    <div style={{margin: 10}}>
    <h4>Media: {media}</h4> 
    </div>
    <div style={{margin: 10}}>
    <h4>Date: {date}</h4> 
    </div>
    
    </div>
    <h4 style={{marginBottom: 50}}>Review: {review}</h4> 
    
    <button style={{height: 40, width: 60, marginLeft: 20, backgroundColor: 'red', color: 'white', borderRadius: 10, fontSize: 15, fontWeight: 'bold'}}>Like</button>
    <button style={{height: 40, width: 60, marginLeft: 60, backgroundColor: 'red', color: 'white', borderRadius: 10, fontSize: 15, fontWeight: 'bold'}}>Dislike</button>
</div>
  )
}
