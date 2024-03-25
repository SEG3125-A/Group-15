import React from 'react' 

export default function Review({name, media, date, review, language}) {
    //change color of like and dislike button
  return (
    <div style={{height: 220, width: 900, backgroundColor: 'lightgrey', borderRadius: 5, padding: 20, margin: 20, borderWidth: 2, borderColor: 'black'}}>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
    <div style={{margin: 10}}>
         {/* Nom: */}
        <h4>{language ? 'Name: ' : 'Nom: ' } {name}</h4> 
    </div>
    <div style={{margin: 10}}>
      {/* Média: */}
    <h4>{language ? 'Media: ' : 'Média: ' } {media}</h4> 
    </div>
    <div style={{margin: 10}}>
      {/* Date */}
    <h4>Date: {date}</h4> 
    </div>
    
    </div>
    {/* Commentaire */}
    <h4 style={{marginBottom: 50}}>{language ? 'Review:' : 'Commentaire: ' } {review}</h4> 
    
    <button style={{height: 40, width: 60, marginLeft: 20, backgroundColor: 'red', color: 'white', borderRadius: 10, fontSize: 15, fontWeight: 'bold'}}>{language ? 'Like': 'Aimer'}</button>
    <button style={{height: 40, width: 'auto', marginLeft: 60, backgroundColor: 'red', color: 'white', borderRadius: 10, fontSize: 15, fontWeight: 'bold'}}>{language ? 'Dislike' : 'Ne pas aimer' }</button>
</div>
  )
}
