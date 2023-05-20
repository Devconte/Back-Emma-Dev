-- Revert blogemma:init from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE "comment_post","comment_picture","picture","post","user";

COMMIT;
