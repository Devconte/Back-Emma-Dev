BEGIN;

TRUNCATE TABLE "user","post","comment_post","picture","comment_picture" RESTART IDENTITY;

INSERT INTO "user"("username","password") VALUES 
('emma','jadorelechevaletmonpapa'),
('alycia','chevaltropgenial'),
('jessyca','chevalblancdhenri4'),
('mike','lebossadmin'); 

INSERT INTO "post"("title", "subtitle", "content", "like", "url", "author_id") VALUES
('Mon 1er jour de cheval','Trop génial cette journée', 'Arma Maelium Vecellinum id num debeat progredi ob cum quatenus si patriam Numne debeat debeat num amicos illi iuvare regnum.', 10,'https://i.f1g.fr/media/cms/616x347_cropupscale/2022/09/26/d38c8895125a70b92ac5a630e5b7ceb0a139b880afaee8570cb25756dc5a9797.jpg',1 ),
('Mon 2eme jour de cheval','Trop génial cette journée', 'Arma Maelium Vecellinum id num debeat progredi ob cum quatenus si patriam Numne debeat debeat num amicos illi iuvare regnum.', 5,'https://lemagdesanimaux.ouest-france.fr/images/dossiers/2021-05/accueillir-cheval-064246.jpg',2 ),
('Mon 3eme jour de cheval','Trop génial cette journée', 'Arma Maelium Vecellinum id num debeat progredi ob cum quatenus si patriam Numne debeat debeat num amicos illi iuvare regnum.', 6,'https://www.lacompagniedesanimaux.com/media/magpleasure/mpblog/thumbnail/Q/u/800/410/Quels_sont_les_6_besoins_vitaux_chez_les_chevaux.jpg',1 );

INSERT INTO "comment_post"("comment_content","user_id","post_id") VALUES
('Miscere et indignitate erigentes saepeque eorum amphitheatrali quibus sunt saepeque.',2,1),
('Miscere et indignitate erigentes saepeque eorum amphitheatrali quibus sunt saepeque.',3,2),
('Miscere et indignitate erigentes saepeque eorum amphitheatrali quibus sunt saepeque.',1,3);

INSERT INTO "picture"("url","user_id","title") VALUES 
('https://lemagdesanimaux.ouest-france.fr/images/dossiers/2021-05/accueillir-cheval-064246.jpg', 1 ,'cheval super beau'),
('https://www.lacompagniedesanimaux.com/media/magpleasure/mpblog/thumbnail/Q/u/800/410/Quels_sont_les_6_besoins_vitaux_chez_les_chevaux.jpg', 2, 'cheval de zinzin');

INSERT INTO "comment_picture"("content","user_id","picture_id") VALUES 
('magnifique',2,1),
('trop bo',3,2);

COMMIT;

