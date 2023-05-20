-- Deploy blogemma:change_table_comment to pg

BEGIN;

-- XXX Add DDLs here.
ALTER TABLE comment_post RENAME COLUMN "content" TO "comment_content"; 

COMMIT;
