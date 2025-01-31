var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var game;
(function (game) {
    var AkeomeBehaviourFilter = /** @class */ (function (_super) {
        __extends(AkeomeBehaviourFilter, _super);
        function AkeomeBehaviourFilter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return AkeomeBehaviourFilter;
    }(ut.EntityFilter));
    game.AkeomeBehaviourFilter = AkeomeBehaviourFilter;
    var AkeomeBehaviour = /** @class */ (function (_super) {
        __extends(AkeomeBehaviour, _super);
        function AkeomeBehaviour() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        // this method is called for each entity matching the AkeomeBehaviourFilter signature, once when enabled
        //OnEntityEnable():void { }
        // this method is called for each entity matching the AkeomeBehaviourFilter signature, every frame it's enabled
        AkeomeBehaviour.prototype.OnEntityUpdate = function () {
            var rotation = this.data.localRottion.rotation;
            if (rotation.y == 0.0)
                return;
            var speed = this.data.akeome.speed;
            rotation.y += speed;
            if (rotation.y >= 0.0) {
                rotation.y = 0.0;
            }
        };
        return AkeomeBehaviour;
    }(ut.ComponentBehaviour));
    game.AkeomeBehaviour = AkeomeBehaviour;
})(game || (game = {}));
var game;
(function (game) {
    var CollisionSystem = /** @class */ (function (_super) {
        __extends(CollisionSystem, _super);
        function CollisionSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CollisionSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.Entity, ut.HitBox2D.HitBoxOverlapResults, game.Otosidama], function (entity, hitResult, otosi) {
                for (var i = 0; i < hitResult.overlaps.length; i++) {
                    var otherEntity = hitResult.overlaps[i].otherEntity;
                    if ((_this.world.getEntityName(otherEntity) == "Player")) {
                        game.MoneyManager.GetMoney(_this.world);
                        _this.world.destroyEntity(entity);
                    }
                }
            });
            this.world.forEach([ut.Entity, ut.HitBox2D.HitBoxOverlapResults, game.Taka], function (entity, hitResult, taka) {
                for (var i = 0; i < hitResult.overlaps.length; i++) {
                    var otherEntity = hitResult.overlaps[i].otherEntity;
                    if ((_this.world.getEntityName(otherEntity) == "Player")) {
                        game.GameManager.StopGame(_this.world);
                    }
                }
            });
        };
        return CollisionSystem;
    }(ut.ComponentSystem));
    game.CollisionSystem = CollisionSystem;
})(game || (game = {}));
var game;
(function (game) {
    var DreamBehaviorFilter = /** @class */ (function (_super) {
        __extends(DreamBehaviorFilter, _super);
        function DreamBehaviorFilter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DreamBehaviorFilter;
    }(ut.EntityFilter));
    game.DreamBehaviorFilter = DreamBehaviorFilter;
    var DreamBehavior = /** @class */ (function (_super) {
        __extends(DreamBehavior, _super);
        function DreamBehavior() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.num = 0;
            return _this;
            // this method is called for each entity matching the DreamBehaviorFilter signature, once when disabled
            //OnEntityDisable():void { }
        }
        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        // this method is called for each entity matching the DreamBehaviorFilter signature, once when enabled
        DreamBehavior.prototype.OnEntityEnable = function () {
        };
        // this method is called for each entity matching the DreamBehaviorFilter signature, every frame it's enabled
        DreamBehavior.prototype.OnEntityUpdate = function () {
            if (ut.Runtime.Input.getMouseButton(0) && this.data.dream.isDream) {
                document.write("<script>location.href = 'https://goodnightdream.cf';</script>");
            }
            this.num += ut.Time.deltaTime();
            if (this.num > 5) {
                this.data.dream.isDream = true;
            }
        };
        return DreamBehavior;
    }(ut.ComponentBehaviour));
    game.DreamBehavior = DreamBehavior;
})(game || (game = {}));
var game;
(function (game) {
    var GameManager = /** @class */ (function () {
        function GameManager() {
        }
        GameManager.EndGame = function (world) {
            ut.EntityGroup.destroyAll(world, 'game.MainGroup');
            ut.EntityGroup.destroyAll(world, 'game.OkaneView');
            ut.EntityGroup.destroyAll(world, 'game.OtosidamaGroup');
            ut.EntityGroup.destroyAll(world, 'game.TakaGroup');
            ut.EntityGroup.destroyAll(world, 'game.Oops');
            ut.EntityGroup.instantiate(world, 'game.End');
        };
        ;
        GameManager.StopGame = function (world) {
            world.forEach([game.MoveSpeed], function (speed) {
                speed.speed = 0;
            });
            world.forEach([game.ScrollBackground], function (speed) {
                speed.speed = 0;
            });
            world.forEach([game.Spawner], function (spawner) {
                spawner.isPaused = true;
            });
            ut.EntityGroup.instantiate(world, 'game.Oops');
        };
        GameManager.SetDream = function (world) {
            ut.EntityGroup.instantiate(world, 'game.DreamGroup');
        };
        return GameManager;
    }());
    game.GameManager = GameManager;
})(game || (game = {}));
var game;
(function (game) {
    var MissButtonSystem = /** @class */ (function (_super) {
        __extends(MissButtonSystem, _super);
        function MissButtonSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MissButtonSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.MissButton], function (button) {
                if (ut.Runtime.Input.getMouseButton(0)) {
                    game.GameManager.EndGame(_this.world);
                }
            });
        };
        return MissButtonSystem;
    }(ut.ComponentSystem));
    game.MissButtonSystem = MissButtonSystem;
})(game || (game = {}));
var game;
(function (game) {
    var MoneyManager = /** @class */ (function () {
        function MoneyManager() {
        }
        MoneyManager.GetMoney = function (world) {
            MoneyManager.money += 1;
            world.forEach([ut.Text.Text2DRenderer, game.MoneyUI], function (renderer, ui) {
                renderer.text = String(MoneyManager.money) + MoneyManager.defaText;
            });
        };
        MoneyManager.defaText = '000Yen';
        MoneyManager.money = 0;
        return MoneyManager;
    }());
    game.MoneyManager = MoneyManager;
})(game || (game = {}));
var game;
(function (game) {
    var OkaneBehavirFilter = /** @class */ (function (_super) {
        __extends(OkaneBehavirFilter, _super);
        function OkaneBehavirFilter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return OkaneBehavirFilter;
    }(ut.EntityFilter));
    game.OkaneBehavirFilter = OkaneBehavirFilter;
    var OkaneBehavir = /** @class */ (function (_super) {
        __extends(OkaneBehavir, _super);
        function OkaneBehavir() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        // this method is called for each entity matching the OkaneBehavirFilter signature, once when enabled
        OkaneBehavir.prototype.OnEntityEnable = function () {
            var randomY = getRandom(this.data.bounds.minY, this.data.bounds.maxY);
            var newPos = new Vector3(this.data.bounds.maxX, randomY, 0);
            this.data.position.position = newPos;
        };
        // this method is called for each entity matching the OkaneBehavirFilter signature, every frame it's enabled
        OkaneBehavir.prototype.OnEntityUpdate = function () {
            var localPosition = this.data.position.position;
            localPosition.x -= this.data.speed.speed * ut.Time.deltaTime();
            this.data.position.position = localPosition;
            if (localPosition.x <= this.data.bounds.minX) {
                this.world.destroyEntity(this.data.entity);
                return;
            }
        };
        return OkaneBehavir;
    }(ut.ComponentBehaviour));
    game.OkaneBehavir = OkaneBehavir;
    function getRandom(min, max) {
        return Math.random() * (max - min + 1) + min;
    }
})(game || (game = {}));
var game;
(function (game) {
    var PlayerBehaviorFilter = /** @class */ (function (_super) {
        __extends(PlayerBehaviorFilter, _super);
        function PlayerBehaviorFilter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PlayerBehaviorFilter;
    }(ut.EntityFilter));
    game.PlayerBehaviorFilter = PlayerBehaviorFilter;
    var PlayerBehavior = /** @class */ (function (_super) {
        __extends(PlayerBehavior, _super);
        function PlayerBehavior() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        // this method is called for each entity matching the PlayerBehaviorFilter signature, once when enabled
        //OnEntityEnable():void { }
        // this method is called for each entity matching the PlayerBehaviorFilter signature, every frame it's enabled
        PlayerBehavior.prototype.OnEntityUpdate = function () {
            if (!this.data.groundBool.isGround) {
                var contacts = this.data.newColliderContacts.contacts;
                if (contacts.length > 0) {
                    if ((this.world.getEntityName(contacts[0]) == "Ground")) {
                        this.data.groundBool.isGround = true;
                    }
                }
            }
            if (ut.Runtime.Input.getMouseButton(0) && this.data.groundBool.isGround) {
                var impulse = new ut.Physics2D.AddImpulse2D;
                impulse.impulse = new Vector2(0, this.data.move.upForce.y);
                this.world.addComponentData(this.data.entity, impulse);
                this.data.groundBool.isGround = false;
            }
        };
        return PlayerBehavior;
    }(ut.ComponentBehaviour));
    game.PlayerBehavior = PlayerBehavior;
})(game || (game = {}));
var game;
(function (game) {
    var ResultFilter = /** @class */ (function (_super) {
        __extends(ResultFilter, _super);
        function ResultFilter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ResultFilter;
    }(ut.EntityFilter));
    game.ResultFilter = ResultFilter;
    var Result = /** @class */ (function (_super) {
        __extends(Result, _super);
        function Result() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        // this method is called for each entity matching the ResultFilter signature, once when enabled
        Result.prototype.OnEntityEnable = function () {
            this.data.renderer.text = "Result:" + String(game.MoneyManager.money) + "000Yen";
        };
        return Result;
    }(ut.ComponentBehaviour));
    game.Result = Result;
})(game || (game = {}));
var game;
(function (game) {
    var ScrollBackgroundBehaviorFilter = /** @class */ (function (_super) {
        __extends(ScrollBackgroundBehaviorFilter, _super);
        function ScrollBackgroundBehaviorFilter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ScrollBackgroundBehaviorFilter;
    }(ut.EntityFilter));
    game.ScrollBackgroundBehaviorFilter = ScrollBackgroundBehaviorFilter;
    var ScrollBackgroundBehavior = /** @class */ (function (_super) {
        __extends(ScrollBackgroundBehavior, _super);
        function ScrollBackgroundBehavior() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        // this method is called for each entity matching the ScrollBackgroundBehaviorFilter signature, once when enabled
        ScrollBackgroundBehavior.prototype.OnEntityEnable = function () {
            this.isStart = false;
        };
        // this method is called for each entity matching the ScrollBackgroundBehaviorFilter signature, every frame it's enabled
        ScrollBackgroundBehavior.prototype.OnEntityUpdate = function () {
            if (!this.isStart) {
                if (!ut.Runtime.Input.getMouseButton(0))
                    return;
                this.isStart = true;
                this.world.forEach([game.Spawner], function (spawner) {
                    spawner.isPaused = false;
                });
                ut.EntityGroup.instantiate(this.world, "game.OkaneView");
            }
            var position = this.data.position;
            var scrolling = this.data.scrolling;
            var localPosition = position.position;
            localPosition.x -= scrolling.speed * 0.01;
            if (localPosition.x < scrolling.threshold)
                localPosition.x += scrolling.distance;
            position.position = localPosition;
        };
        return ScrollBackgroundBehavior;
    }(ut.ComponentBehaviour));
    game.ScrollBackgroundBehavior = ScrollBackgroundBehavior;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var SetDreamSystem = /** @class */ (function (_super) {
        __extends(SetDreamSystem, _super);
        function SetDreamSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SetDreamSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.SetDream], function (button) {
                if (ut.Runtime.Input.getMouseButton(0)) {
                    game.GameManager.SetDream(_this.world);
                }
            });
        };
        return SetDreamSystem;
    }(ut.ComponentSystem));
    game.SetDreamSystem = SetDreamSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var SpawnSystem = /** @class */ (function (_super) {
        __extends(SpawnSystem, _super);
        function SpawnSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpawnSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.Spawner], function (spawner) {
                if (spawner.isPaused)
                    return;
                var time = spawner.time;
                var delay = spawner.delay;
                time -= ut.Time.deltaTime();
                if (time <= 0) {
                    time += delay;
                    ut.EntityGroup.instantiate(_this.world, spawner.spawnedGroup);
                }
                spawner.time = time;
            });
        };
        return SpawnSystem;
    }(ut.ComponentSystem));
    game.SpawnSystem = SpawnSystem;
})(game || (game = {}));
var game;
(function (game) {
    var TakaBehaviorFilter = /** @class */ (function (_super) {
        __extends(TakaBehaviorFilter, _super);
        function TakaBehaviorFilter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return TakaBehaviorFilter;
    }(ut.EntityFilter));
    game.TakaBehaviorFilter = TakaBehaviorFilter;
    var TakaBehavior = /** @class */ (function (_super) {
        __extends(TakaBehavior, _super);
        function TakaBehavior() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        // this method is called for each entity matching the TakaBehaviorFilter signature, once when enabled
        TakaBehavior.prototype.OnEntityEnable = function () {
            var randomY = getRandom(this.data.bounds.minY, this.data.bounds.maxY);
            var newPos = new Vector3(this.data.bounds.maxX, randomY, 0);
            this.data.position.position = newPos;
            var totalTime = ut.Time.time();
            var newSpeed = this.data.speed.speed + (this.data.speedChange.changePerSecond * totalTime);
            this.data.speed.speed = newSpeed;
        };
        // this method is called for each entity matching the TakaBehaviorFilter signature, every frame it's enabled
        TakaBehavior.prototype.OnEntityUpdate = function () {
            var localPosition = this.data.position.position;
            localPosition.x -= this.data.speed.speed * ut.Time.deltaTime();
            this.data.position.position = localPosition;
            if (localPosition.x <= this.data.bounds.minX) {
                this.world.destroyEntity(this.data.entity);
                return;
            }
        };
        return TakaBehavior;
    }(ut.ComponentBehaviour));
    game.TakaBehavior = TakaBehavior;
    function getRandom(min, max) {
        return Math.random() * (max - min + 1) + min;
    }
})(game || (game = {}));
var ut;
(function (ut) {
    /**
     * Placeholder system to provide a UnityEngine.Time like API
     *
     * e.g.
     *  let deltaTime = ut.Time.deltaTime();
     *  let time = ut.Time.time();
     *
     */
    var Time = /** @class */ (function (_super) {
        __extends(Time, _super);
        function Time() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Time_1 = Time;
        Time.deltaTime = function () {
            return Time_1._deltaTime;
        };
        Time.time = function () {
            return Time_1._time;
        };
        Time.reset = function () {
            Time_1._time = 0;
        };
        Time.prototype.OnUpdate = function () {
            var dt = this.scheduler.deltaTime();
            Time_1._deltaTime = dt;
            Time_1._time += dt;
        };
        var Time_1;
        Time._deltaTime = 0;
        Time._time = 0;
        Time = Time_1 = __decorate([
            ut.executeBefore(ut.Shared.UserCodeStart)
        ], Time);
        return Time;
    }(ut.ComponentSystem));
    ut.Time = Time;
})(ut || (ut = {}));
var ut;
(function (ut) {
    var EntityGroup = /** @class */ (function () {
        function EntityGroup() {
        }
        /**
         * @method
         * @desc Creates a new instance of the given entity group by name and returns all entities
         * @param {ut.World} world - The world to add to
         * @param {string} name - The fully qualified name of the entity group
         * @returns Flat list of all created entities
         */
        EntityGroup.instantiate = function (world, name) {
            var data = this.getEntityGroupData(name);
            if (data == undefined)
                throw "ut.EntityGroup.instantiate: No 'EntityGroup' was found with the name '" + name + "'";
            return data.load(world);
        };
        ;
        /**
         * @method
         * @desc Destroys all entities that were instantated with the given group name
         * @param {ut.World} world - The world to destroy from
         * @param {string} name - The fully qualified name of the entity group
         */
        EntityGroup.destroyAll = function (world, name) {
            var type = this.getEntityGroupData(name).Component;
            world.forEach([ut.Entity, type], function (entity, instance) {
                // @TODO This should REALLY not be necessary
                // We are protecting against duplicate calls to `destroyAllEntityGroups` within an iteration
                if (world.exists(entity)) {
                    world.destroyEntity(entity);
                }
            });
        };
        /**
         * @method
         * @desc Returns an entity group object by name
         * @param {string} name - Fully qualified group name
         */
        EntityGroup.getEntityGroupData = function (name) {
            var parts = name.split('.');
            if (parts.length < 2)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            var shiftedParts = parts.shift();
            var initialData = entities[shiftedParts];
            if (initialData == undefined)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            return parts.reduce(function (v, p) {
                return v[p];
            }, initialData);
        };
        return EntityGroup;
    }());
    ut.EntityGroup = EntityGroup;
})(ut || (ut = {}));
var ut;
(function (ut) {
    var EntityLookupCache = /** @class */ (function () {
        function EntityLookupCache() {
        }
        EntityLookupCache.getByName = function (world, name) {
            var entity;
            if (name in this._cache) {
                entity = this._cache[name];
                if (world.exists(entity))
                    return entity;
            }
            entity = world.getEntityByName(name);
            this._cache[name] = entity;
            return entity;
        };
        EntityLookupCache._cache = {};
        return EntityLookupCache;
    }());
    ut.EntityLookupCache = EntityLookupCache;
})(ut || (ut = {}));
//# sourceMappingURL=tsc-emit.js.map