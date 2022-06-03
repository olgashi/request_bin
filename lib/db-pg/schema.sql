CREATE TABLE requestBins (
  id serial PRIMARY KEY,
  bin_id char(7) NOT NULL UNIQUE,
  date_created TIMESTAMP DEFAULT NOW()
);

CREATE TABLE requests (
  id serial PRIMARY KEY,
  request_id char(27),
  bin_id char(7)
    NOT NULL
    REFERENCES requestBins(bin_id),
  date_received TIMESTAMP DEFAULT NOW(),
  method varchar(8),
  request_path varchar(200)
);