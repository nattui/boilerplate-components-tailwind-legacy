CREATE TABLE "password_auth" (
	"created_at" timestamp DEFAULT now() NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"password" text,
	"user_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"created_at" timestamp DEFAULT now() NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(32) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "password_auth" ADD CONSTRAINT "password_auth_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;