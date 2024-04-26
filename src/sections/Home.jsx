function Home() {
  return (
    <div className="home-wrapper">
      <svg stroke="black">
        <ellipse
          cx="75%"
          cy="50%"
          rx="100"
          ry="100"
          fill="hsl(0, 0%, 13.33%)"
        />
        <ellipse cx="50%" cy="50%" rx="100" ry="100" fill="hsl(0, 0%, 20%)" />
        <ellipse cx="25%" cy="50%" rx="100" ry="100" fill="hsl(0, 0%, 40%)" />
      </svg>
      {/* <p>add motion</p> */}
    </div>
  );
}

export default Home;
