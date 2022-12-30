export default function Work(props) {
  const works = props.works;

  return (
    <div className="collage-card">
      {works.map((works) => (
        <div key={works.id}>
        <img src={works.img} alt="" />
        <div className="appear">
          <a href={works.link}>{works.name}</a>
          <a href={works.weblink}>{works.website}</a>
          </div>
        </div>
        ))}
      </div>
  )
}