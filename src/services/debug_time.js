const parseTime = (input) => {
  if (typeof input === "number") return input;
  if (!input) return 0;

  const str = input.toString();
  const parts = str.split(":");

  console.log(`Input: ${input}, Parts: [${parts}], Length: ${parts.length}`);

  if (parts.length === 3) {
    if (parts[2].length === 3) {
      // mm:ss:ms case
      const minutes = parseFloat(parts[0]);
      const seconds = parseFloat(parts[1]);
      const milliseconds = parseFloat(parts[2]);
      console.log(`  -> mm:ss:ms detected: ${minutes}m ${seconds}s ${milliseconds}ms`);
      return minutes * 60 + seconds + milliseconds / 1000;
    }

    // HH:mm:ss case
    const hours = parseFloat(parts[0]);
    const minutes = parseFloat(parts[1]);
    const seconds = parseFloat(parts[2]);
    console.log(`  -> HH:mm:ss detected: ${hours}h ${minutes}m ${seconds}s`);
    return hours * 3600 + minutes * 60 + seconds;
  }

  if (parts.length === 2) {
    const minutes = parseFloat(parts[0]);
    const seconds = parseFloat(parts[1]);
    console.log(`  -> mm:ss detected: ${minutes}m ${seconds}s`);
    return minutes * 60 + seconds;
  }
  return parseFloat(str);
};

const formatSecondsToTime = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const ms = Math.floor((seconds % 1) * 1000);

  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}:${ms.toString().padStart(3, "0")}`;
};

// Test Cases aligned with user report
const testCases = [
  { start: "00:00:10", end: "00:04:06" },
  { start: "00:04:88", end: "00:14:43" }, // Strange case: 88 seconds? or 880ms?
  { start: "00:15:35", end: "00:17:96" }, // 96 seconds?
  { start: "00:18:55", end: "00:27:08" },
];

testCases.forEach((t, i) => {
  console.log(`\n--- Test Case ${i + 1} ---`);
  const startTime = parseTime(t.start);
  const endTime = parseTime(t.end);
  const duration = Math.max(0, endTime - startTime);
  console.log(`StartSec: ${startTime}, EndSec: ${endTime}, DurationSec: ${duration}`);
  console.log(`Formatted: ${formatSecondsToTime(duration)}`);
});
