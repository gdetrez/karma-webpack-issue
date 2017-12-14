import image from './test.png';

describe('', () => {
  it('loads the image', (done) => {
    console.log(image);
    fetch(image).then(response => {
      expect(response.status).toEqual(200);
      done();
    });
  });
});
