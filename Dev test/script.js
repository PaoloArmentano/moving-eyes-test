
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".pupil").forEach(pupil => {

    const rect = pupil.getBoundingClientRect();
    const pupilX = rect.left + rect.width / 2;
    const pupilY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - pupilY, e.clientX - pupilX);

    const maxMove = 4; // tweak this if pupils should move more/less
    const x = Math.cos(angle) * maxMove;
    const y = Math.sin(angle) * maxMove;

    pupil.style.transform = `translate(${x}px, ${y}px)`;
  });
});

