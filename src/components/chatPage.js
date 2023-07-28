function Chatscreen({ chatter }) {
  return(
    <div className="chatter-box">
      <h3>{chatter.name}</h3>
      <h5>{chatter.message}</h5>
    </div>
  )
}

export default Chatscreen