// utils/snowflake.js
import snowflakeModule from 'snowflake-id';

let SnowflakeId = snowflakeModule && snowflakeModule.default ? snowflakeModule.default : snowflakeModule;

// Some builds export the constructor under different names; try common alternatives
if (typeof SnowflakeId !== 'function') {
  SnowflakeId = snowflakeModule.Snowflake || snowflakeModule.SnowflakeId;
}

if (typeof SnowflakeId !== 'function') {
  throw new Error("Unable to find Snowflake constructor in 'snowflake-id' module");
}

export const snowflake = new SnowflakeId({
  mid: 1, // machine id
  offset: 5, // custom epoch
});
