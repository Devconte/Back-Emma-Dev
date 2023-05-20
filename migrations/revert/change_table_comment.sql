-- Revert blogemma:change_table_comment from pg

BEGIN;

-- XXX Add DDLs here.

ALTER TABLE comment_post RENAME COLUMN "comment_content" TO  "content" ;


COMMIT;
