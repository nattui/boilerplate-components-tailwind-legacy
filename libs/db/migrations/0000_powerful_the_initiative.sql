CREATE TYPE "public"."provider" AS ENUM('credentials', 'social');--> statement-breakpoint
CREATE TYPE "public"."social" AS ENUM('google', 'facebook', 'github');--> statement-breakpoint
CREATE TABLE "auth_credentials" (
	"created_at" timestamp DEFAULT now() NOT NULL,
	"hash_password" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"provider_id" integer NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "auth_providers" (
	"id" serial PRIMARY KEY NOT NULL,
	"provider" "provider" NOT NULL,
	"user_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "auth_social" (
	"created_at" timestamp DEFAULT now() NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"provider_id" integer NOT NULL,
	"social" "social" NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "life_expectancy" (
	"age" numeric NOT NULL,
	"country" varchar(32) PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_profile" (
	"birthday" date,
	"country" varchar(32),
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"created_at" timestamp DEFAULT now() NOT NULL,
	"email" varchar(100) NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(32) NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"username" varchar(32) NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_username_unique" UNIQUE("username")
);
--> statement-breakpoint
ALTER TABLE "auth_credentials" ADD CONSTRAINT "auth_credentials_provider_id_auth_providers_id_fk" FOREIGN KEY ("provider_id") REFERENCES "public"."auth_providers"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "auth_providers" ADD CONSTRAINT "auth_providers_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "auth_social" ADD CONSTRAINT "auth_social_provider_id_auth_providers_id_fk" FOREIGN KEY ("provider_id") REFERENCES "public"."auth_providers"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;