import star from '../assets/star.svg'

const Table = ({repos}) => {
  return (
    <>
    <div className="table-container">

      <table>
                <thead>
                  <tr>
                    <th>Repo ID.</th>
                    <th>Repo Name</th>
                    <th>Repo URL</th>
                    <th>Starred</th>
                  </tr>
                </thead>

                {repos.map((x) => (
                  <tr key={x.id}>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>
                      <a href={x.html_url}>{x.html_url}</a>
                    </td>
                    <td> <img id='star-icon' src={star} /> </td>
                  </tr>
                ))}
              </table>
    </div>

    </>
  )
}

export default Table
