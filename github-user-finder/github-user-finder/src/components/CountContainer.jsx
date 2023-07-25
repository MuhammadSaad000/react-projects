

const CountContainer = ({userProfile}) => {
  return (
    <>
        <div className="count-container">
            <div className="c1">
            <h2>Followers </h2> <h1> {userProfile.followers}</h1>
            </div>
            <div className="c2">
                <h2>Followers </h2> <h1> {userProfile.following}</h1>
            </div>
        </div>
    </>
  )
}

export default CountContainer
