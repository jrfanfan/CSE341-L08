const dashboardCon = (req, res) => {
  res.sendFile('C:/Users/jrfanfan.GHESKIO/Documents/App using OAuth2.0/frontend/dashboard.html');
}
const inputCon = (req, res) => {
    res.sendFile('C:/Users/jrfanfan.GHESKIO/Documents/App using OAuth2.0/frontend/input.html');
  }
  const updateDataById = (req, res) => {
    res.render('/update.html');
  }
module.exports = { dashboardCon, inputCon, updateDataById}