-- Gets user joined per minute
SELECT
  date_trunc ('minute', created_at) as minute,
  COUNT(*) as count
FROM
  public.user
GROUP BY
  minute
ORDER BY
  minute ASC;
