import React from 'react';

const MovieCard = ({title,description,posterURL,note}) =>{
return(
<div>
<img src={posterURL} alt={title}/>
<h2>{title}</h2>
<p>{description}</p>
<p>Note :{note}</p>
</div>
)
}

export default MovieCard;
