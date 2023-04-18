/* eslint-disable no-invalid-this */
/* eslint-disable consistent-this */
export default function getNeighborhoodsList() {

  // eslint-disable-next-line no-invalid-this
  this.sanFranciscoNeighborhoods = ["SOMA", "Union Square"];

  const self = this;

  this.addNeighborhood = (newNeighborhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);

    return self.sanFranciscoNeighborhoods;
  };
}
