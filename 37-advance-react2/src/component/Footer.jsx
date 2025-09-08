const Footer = () => {
  return (
    <>
      <div class="jumbotron mb-0 bg-warning" id="contact">
        <h1 class="text-center">Contact</h1>
        <div class="row">
          <div class="col-md-4 p-4">
            <form>
              <div class="form-group">
                <label htmlFor="username">Enter Your Name</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  class="form-control"
                />
              </div>

              <div class="form-group">
                <label htmlFor="phone">Enter Phone No</label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  class="form-control"
                />
              </div>

              <div class="form-group">
                <label for="email">Enter Your Email ID</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="form-control"
                />
              </div>
              <br></br>
              <button type="submit" class="btn btn-primary">
                Send Us !
              </button>
            </form>
          </div>
          <div class="col-md-4 p-4">
            <h4>Address</h4>
            <address>Badshahpur,Sec-66,Gurugram, Haryana</address>

            <h4>Mobile No.</h4>
            <address>+91 8586007689 , +91 8810422553</address>

            <h4>Email Id</h4>
            <address>ps7379791@gmail.com</address>

            <h4>Website</h4>
            <address>PrePlayConnect.com</address>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
