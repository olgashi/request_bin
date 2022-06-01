INSERT INTO requestBins (bin_id)
  VALUES ('abcd123'),
         ('abcd124'),
         ('abcd125'),
         ('abcd126');


INSERT INTO requests (request_id, bin_id, method, request_path)
  VALUES ('tlags6810', 'abcd124', 'GET', '/admin'),
         ('tlaqP9810', 'abcd124', 'POST', '/'),
         ('Ula0s6L10', 'abcd124', 'PUT', '/xyz/xyz'),
         ('Ula0s6Rq0', 'abcd125', 'PUT', '/xyz/xyz/432424'),
         ('Ula0s6Rq0', 'abcd125', 'GET', '/xyz/123'),
         ('8Ia0s6L10', 'abcd126', 'PUT', '/xyz/0001/2/'),
         ('UlPls6L10', 'abcd123', 'POST', '/xyz/xyz');
