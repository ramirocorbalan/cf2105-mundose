import Navbar from "../Navbar";

function Landing() {
  return (
    <section class="section-landing">
      <header>
        <Navbar />
      </header>
      <div class="container">
        <h2>Sed ut perspiciatis unde omnis iste natus</h2>

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque.
        </p>

        <button type="button" class="btn btn-primary btn-lg">
          Read more
        </button>
      </div>
    </section>
  );
}

export default Landing;
