class Api {
    getData () {
        return (
          fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-04-08&end_date=2021-04-10&api_key=DEMO_KEY')
        )
        .then(res => res.json())
      }
}

export default Api