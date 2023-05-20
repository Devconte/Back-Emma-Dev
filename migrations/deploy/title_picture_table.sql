-- Deploy blogemma:title_picture_table to pg

BEGIN;

-- XXX Add DDLs here.
ALTER TABLE "picture"
ADD "title" TEXT;

COMMIT;
