/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project TinyTest
 */

console.log('runtime version: internal');

ut.importModule(ut.Core2D);
ut.importModule(ut.Math);
ut.importModule(ut);
ut.importModule(ut.Shared);
ut.importModule(ut.Core2D);
ut.importModule(ut.HTML);
ut.importModule(ut.Rendering);
ut.importModule(ut.Rendering);
ut.importModule(ut.HTML);
ut.importModule(ut.Core2D);
ut.importModule(ut.Rendering);
ut.importModule(ut.Rendering);
ut.importModule(ut.Core2D);
ut.importModule(ut.Physics2D);
ut.importModule(ut.HitBox2D);
ut.main = function() {
    game.AkeomeBehaviourFilter._Components = [ut.Entity, 
        ut.Core2D.TransformNode, game.Akeome
    ];
    game.AkeomeBehaviourFilter.prototype.Read = function(world, entity) {
        this.node = world.getComponentData(entity, ut.Core2D.TransformNode);
        this.localRottion = world.hasComponent(entity, ut.Core2D.TransformLocalRotation) ? world.getComponentData(entity, ut.Core2D.TransformLocalRotation) : undefined;
        this.akeome = world.getComponentData(entity, game.Akeome);
    };
    game.AkeomeBehaviourFilter.prototype.Reset = function() {
        this.node = undefined;
        this.localRottion = undefined;
        this.akeome = undefined;
    };
    game.AkeomeBehaviourFilter.prototype.Write = function(world, entity) {
        world.setComponentData(entity, this.node);
        if (this.localRottion) { world.setOrAddComponentData(entity, this.localRottion); }
        world.setComponentData(entity, this.akeome);
    };
    game.AkeomeBehaviourFilter.prototype.ForEach = function(world, callback) {
        var _this = this;
        world.forEach(this.constructor._Components, function($entity, node, akeome) {
            _this.Read(world, $entity);
            callback($entity);
            if (world.exists($entity)) { _this.Write(world, $entity); }
        });
    };
    game.OkaneBehavirFilter._Components = [ut.Entity, 
        ut.Core2D.TransformNode, game.MoveSpeed, game.Boundaries, game.Otosidama
    ];
    game.OkaneBehavirFilter.prototype.Read = function(world, entity) {
        this.entity = entity;
        this.node = world.getComponentData(entity, ut.Core2D.TransformNode);
        this.position = world.hasComponent(entity, ut.Core2D.TransformLocalPosition) ? world.getComponentData(entity, ut.Core2D.TransformLocalPosition) : undefined;
        this.speed = world.getComponentData(entity, game.MoveSpeed);
        this.bounds = world.getComponentData(entity, game.Boundaries);
        this.otosi = world.getComponentData(entity, game.Otosidama);
    };
    game.OkaneBehavirFilter.prototype.Reset = function() {
        this.entity = undefined;
        this.node = undefined;
        this.position = undefined;
        this.speed = undefined;
        this.bounds = undefined;
        this.otosi = undefined;
    };
    game.OkaneBehavirFilter.prototype.Write = function(world, entity) {
        world.setComponentData(entity, this.node);
        if (this.position) { world.setOrAddComponentData(entity, this.position); }
        world.setComponentData(entity, this.speed);
        world.setComponentData(entity, this.bounds);
        world.setComponentData(entity, this.otosi);
    };
    game.OkaneBehavirFilter.prototype.ForEach = function(world, callback) {
        var _this = this;
        world.forEach(this.constructor._Components, function($entity, node, speed, bounds, otosi) {
            _this.Read(world, $entity);
            callback($entity);
            if (world.exists($entity)) { _this.Write(world, $entity); }
        });
    };
    game.PlayerBehaviorFilter._Components = [ut.Entity, 
        game.Move, game.IsGround, ut.Physics2D.NewColliderContacts, game.Player
    ];
    game.PlayerBehaviorFilter.prototype.Read = function(world, entity) {
        this.entity = entity;
        this.move = world.getComponentData(entity, game.Move);
        this.groundBool = world.getComponentData(entity, game.IsGround);
        this.newColliderContacts = world.getComponentData(entity, ut.Physics2D.NewColliderContacts);
        this.player = world.getComponentData(entity, game.Player);
    };
    game.PlayerBehaviorFilter.prototype.Reset = function() {
        this.entity = undefined;
        this.move = undefined;
        this.groundBool = undefined;
        this.newColliderContacts = undefined;
        this.player = undefined;
    };
    game.PlayerBehaviorFilter.prototype.Write = function(world, entity) {
        world.setComponentData(entity, this.move);
        world.setComponentData(entity, this.groundBool);
        world.setComponentData(entity, this.newColliderContacts);
        world.setComponentData(entity, this.player);
    };
    game.PlayerBehaviorFilter.prototype.ForEach = function(world, callback) {
        var _this = this;
        world.forEach(this.constructor._Components, function($entity, move, groundBool, newColliderContacts, player) {
            _this.Read(world, $entity);
            callback($entity);
            if (world.exists($entity)) { _this.Write(world, $entity); }
        });
    };
    game.ScrollBackgroundBehaviorFilter._Components = [ut.Entity, 
        ut.Core2D.TransformNode, game.ScrollBackground
    ];
    game.ScrollBackgroundBehaviorFilter.prototype.Read = function(world, entity) {
        this.node = world.getComponentData(entity, ut.Core2D.TransformNode);
        this.position = world.hasComponent(entity, ut.Core2D.TransformLocalPosition) ? world.getComponentData(entity, ut.Core2D.TransformLocalPosition) : undefined;
        this.scrolling = world.getComponentData(entity, game.ScrollBackground);
    };
    game.ScrollBackgroundBehaviorFilter.prototype.Reset = function() {
        this.node = undefined;
        this.position = undefined;
        this.scrolling = undefined;
    };
    game.ScrollBackgroundBehaviorFilter.prototype.Write = function(world, entity) {
        world.setComponentData(entity, this.node);
        if (this.position) { world.setOrAddComponentData(entity, this.position); }
        world.setComponentData(entity, this.scrolling);
    };
    game.ScrollBackgroundBehaviorFilter.prototype.ForEach = function(world, callback) {
        var _this = this;
        world.forEach(this.constructor._Components, function($entity, node, scrolling) {
            _this.Read(world, $entity);
            callback($entity);
            if (world.exists($entity)) { _this.Write(world, $entity); }
        });
    };
    game.AkeomeBehaviour.Instance = new game.AkeomeBehaviour();
    game.AkeomeBehaviour._StateType = game.AkeomeBehaviour_State;
    game.AkeomeBehaviour.prototype._GetFilter = function() { if (!this.data) { this.data = new game.AkeomeBehaviourFilter(); } return this.data; }
    game.OkaneBehavir.Instance = new game.OkaneBehavir();
    game.OkaneBehavir._StateType = game.OkaneBehavir_State;
    game.OkaneBehavir.prototype._GetFilter = function() { if (!this.data) { this.data = new game.OkaneBehavirFilter(); } return this.data; }
    game.PlayerBehavior.Instance = new game.PlayerBehavior();
    game.PlayerBehavior._StateType = game.PlayerBehavior_State;
    game.PlayerBehavior.prototype._GetFilter = function() { if (!this.data) { this.data = new game.PlayerBehaviorFilter(); } return this.data; }
    game.ScrollBackgroundBehavior.Instance = new game.ScrollBackgroundBehavior();
    game.ScrollBackgroundBehavior._StateType = game.ScrollBackgroundBehavior_State;
    game.ScrollBackgroundBehavior.prototype._GetFilter = function() { if (!this.data) { this.data = new game.ScrollBackgroundBehaviorFilter(); } return this.data; }
    // Singleton world
    var world = new ut.World();

    // Schedule all systems
    var scheduler = world.scheduler();
    game.CollisionSystemJS.update = new game.CollisionSystem()._MakeSystemFn();
    game.SpawnSystemJS.update = new game.SpawnSystem()._MakeSystemFn();
    ut.TimeJS.update = new ut.Time()._MakeSystemFn();
    game.OkaneBehavir_OnEntityEnableJS.update = game.OkaneBehavir.Instance._MakeOnEntityEnable();
    game.ScrollBackgroundBehavior_OnEntityEnableJS.update = game.ScrollBackgroundBehavior.Instance._MakeOnEntityEnable();
    game.AkeomeBehaviour_OnEntityUpdateJS.update = game.AkeomeBehaviour.Instance._MakeOnEntityUpdate();
    game.OkaneBehavir_OnEntityUpdateJS.update = game.OkaneBehavir.Instance._MakeOnEntityUpdate();
    game.PlayerBehavior_OnEntityUpdateJS.update = game.PlayerBehavior.Instance._MakeOnEntityUpdate();
    game.ScrollBackgroundBehavior_OnEntityUpdateJS.update = game.ScrollBackgroundBehavior.Instance._MakeOnEntityUpdate();
    scheduler.schedule(game.CollisionSystemJS);
    scheduler.schedule(game.SpawnSystemJS);
    scheduler.schedule(ut.TimeJS);
    scheduler.schedule(ut.HTML.InputHandler);
    scheduler.schedule(ut.HTML.AssetLoader);
    scheduler.schedule(ut.Core2D.SequencePlayerSystem);
    scheduler.schedule(ut.HitBox2D.HitBox2DSystem);
    scheduler.schedule(game.OkaneBehavir_OnEntityEnableJS);
    scheduler.schedule(game.ScrollBackgroundBehavior_OnEntityEnableJS);
    scheduler.schedule(ut.Shared.InputFence);
    scheduler.schedule(ut.Shared.UserCodeStart);
    scheduler.schedule(game.AkeomeBehaviour_OnEntityUpdateJS);
    scheduler.schedule(game.OkaneBehavir_OnEntityUpdateJS);
    scheduler.schedule(game.PlayerBehavior_OnEntityUpdateJS);
    scheduler.schedule(game.ScrollBackgroundBehavior_OnEntityUpdateJS);
    scheduler.schedule(ut.Shared.UserCodeEnd);
    scheduler.schedule(ut.Shared.RenderingFence);
    scheduler.schedule(ut.Core2D.UpdateLocalTransformSystem);
    scheduler.schedule(ut.Core2D.UpdateWorldTransformSystem);
    scheduler.schedule(ut.Core2D.Sprite2DInitSystem);
    scheduler.schedule(ut.Core2D.DisplayList);
    scheduler.schedule(ut.Shared.PlatformRenderingFence);
    scheduler.schedule(ut.Rendering.RendererCanvas);
    scheduler.schedule(ut.Rendering.RendererGLWebGL);
    scheduler.schedule(ut.Physics2D.Physics2DSystem);

    // Initialize all configuration data
    var c0 = world.getConfigData(ut.Core2D.DisplayInfo);
    c0.width = 360;
    c0.height = 580;
    c0.autoSizeToFrame = true;
    c0.renderMode = 0;
    world.setConfigData(c0);
    var c1 = world.getConfigData(ut.Physics2D.Physics2DConfig);
    var s0 = new ut.Math.Vector2();
    s0.x = 0;
    s0.y = -20;
    c1.gravity = s0;
    world.setConfigData(c1);

    // Create and initialize all resource entities
    UT_ASSETS_SETUP(world);

    // Create and initialize all startup entities
    ut.EntityGroup.instantiate(world, "game.MainGroup");

    // Set up the WebSocket client
    ut._wsclient = ut._wsclient || {};
    ut._wsclient.world = world;

    // Start the player loop
    try { ut.Runtime.Service.run(world); } catch (e) { if (e !== 'SimulateInfiniteLoop') throw e; }
}
