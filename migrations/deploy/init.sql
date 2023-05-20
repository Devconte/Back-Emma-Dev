-- SQLBook: Code
-- Deploy blogemma:init to pg

BEGIN;

-- XXX Add DDLs here.
CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);






CREATE TABLE "post" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "like" INTEGER DEFAULT 0,
    "url" TEXT,
    "author_id" INTEGER REFERENCES "user"("id"),    
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "comment_post" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "content" TEXT,
    "user_id" INTEGER REFERENCES "user"("id") ON DELETE CASCADE, 
    "post_id" INTEGER REFERENCES "post"("id") ON DELETE CASCADE,     
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "picture" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "url" TEXT NOT NULL,
    "user_id" INTEGER REFERENCES "user"("id"),    
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "comment_picture" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "content" TEXT,
    "user_id" INTEGER REFERENCES "user"("id") ON DELETE CASCADE,
    "picture_id" INTEGER REFERENCES "picture"("id") ON DELETE CASCADE,     
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

COMMIT;
