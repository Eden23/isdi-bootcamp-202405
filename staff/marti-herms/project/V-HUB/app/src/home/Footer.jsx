import extractPayloadFromToken from '../../util/extractPayloadFromToken.js'

export default function Footer({ path, makeReviewVisibility, onSearchGame, onRegisterGame, onHome, onAddReview, onCancel }) {
    const { role } = extractPayloadFromToken(sessionStorage.token)

    return <footer className='fixed w-screen h-10 bottom-0 left-0 flex flex-row justify-around items-center border-t border-solid border-t-black z-10 bg-slate-700'>
        {path === '/' && <>
            {role === 'dev' && <button className='border border-solid border-slate-500 bg-white px-2 rounded' onClick={onRegisterGame}>Register Game</button>}
            <button className='border border-solid border-slate-500 bg-white px-2 rounded' onClick={onSearchGame}>Search Game</button>
        </>}
        {path.startsWith('/games') && <button className='border border-solid border-slate-500 bg-white px-2 rounded' onClick={onHome}>HOME</button>}
        {path.length > 15 && (makeReviewVisibility ? <button className='border border-solid border-slate-500 bg-white px-2 rounded' onClick={onCancel}>Cancel</button> :
            <button className='border border-solid border-slate-500 bg-white px-2 rounded' onClick={onAddReview}>+</button>)}
    </footer>
}