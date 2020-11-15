import React from 'react'

function Result({ result, openPopup }) {
	return (
		<div className="result" onClick={() => openPopup(result.imdbID)}>
			<img src={result.Poster} alt="poster" />
			<h3>{result.Title}</h3>
            <p>{result.Actors}</p>
		</div>
	)
}

export default Result