(() => {
  document.querySelector(".js-speaker-form").addEventListener("submit", e => {
    const maxNameLength = 11;
    const maxValueLength = 45;
    const verticalSeparator = `┃`;
    const horizontalSeparator = `━`;
    const FrameLength = maxNameLength + maxValueLength + 7;
    const maxConsoleTimeLength = maxValueLength - 9;

    var frameOffset = ``;
    for (let i = 0; i < FrameLength; i++) {
      frameOffset = frameOffset + horizontalSeparator;
    }

    var timeStringOffset = ``;
    for (let i = 0; i < maxConsoleTimeLength; i++) {
      timeStringOffset = timeStringOffset + ` `;
    }

    e.preventDefault(),
      console.log(
        `┏${frameOffset}┓\n${verticalSeparator}  console-time ${verticalSeparator}`,
        new Date().toTimeString().slice(0, 8),
        `${timeStringOffset} ${verticalSeparator}`,
      ),
      new FormData(e.currentTarget).forEach((inputValue, inputName) => {
        var cycleMaxNameLength = maxNameLength - inputName.length;
        var nameOffset = ``;
        for (let i = 0; i < cycleMaxNameLength; i++) {
          nameOffset = nameOffset + ` `;
        }

        var cycleMaxValueLength = maxValueLength - inputValue.length;
        var valueOffset = ``;
        if (cycleMaxValueLength > 0) {
          for (let i = 0; i < cycleMaxValueLength; i++) {
            valueOffset = valueOffset + ` `;
          }
          valueOffset = valueOffset + verticalSeparator;
        }

        console.log(
          `${verticalSeparator}  ${inputName} ${nameOffset} ${verticalSeparator} ${inputValue} ${valueOffset}`,
        ),
          e.currentTarget.reset();
      }),
      console.log(`┗${frameOffset}┛`);
  });
})();
