const instaPuppet = require("./instaPuppet");

(async () => {
  await instaPuppet.init();

  await instaPuppet.login("asfd", "asfd");
})();
